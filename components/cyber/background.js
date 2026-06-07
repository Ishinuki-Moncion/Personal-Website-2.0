import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'
import * as THREE from 'three'

const CYAN = 0x39f0ff
const AMBER = 0xff9e2c

// Persistent immersive scene behind the whole page: near-black fog, amber+cyan
// particle fields, a breathing distorted wireframe form, and a synthwave grid
// receding into the dark. Reactive to mouse (parallax) and scroll (camera dolly
// + grid drift + spin). One render loop. DPR-capped, paused when hidden, static
// under prefers-reduced-motion.
const Background = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    let w = window.innerWidth
    let h = window.innerHeight

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x05060a, 0.055)

    const camera = new THREE.PerspectiveCamera(62, w / h, 0.1, 120)
    camera.position.set(0, 0, 10)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(dpr)
    renderer.setSize(w, h)
    mount.appendChild(renderer.domElement)

    // — particle fields —
    const makeField = (count, color, spread, size, op) => {
      const geo = new THREE.BufferGeometry()
      const pos = new Float32Array(count * 3)
      for (let i = 0; i < count * 3; i++)
        pos[i] = (Math.random() - 0.5) * spread
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      const mat = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity: op,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      })
      return new THREE.Points(geo, mat)
    }
    const fieldCyan = makeField(2200, CYAN, 42, 0.05, 0.9)
    const fieldAmber = makeField(1100, AMBER, 34, 0.06, 0.85)
    scene.add(fieldCyan, fieldAmber)

    // — distorted wireframe form —
    const icoGeo = new THREE.IcosahedronGeometry(3.2, 3)
    const basePos = icoGeo.attributes.position.array.slice()
    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(icoGeo),
      new THREE.LineBasicMaterial({
        color: CYAN,
        transparent: true,
        opacity: 0.3,
        blending: THREE.AdditiveBlending
      })
    )
    wire.position.set(2.5, 0.5, -2)
    scene.add(wire)

    // — synthwave grid floor receding into fog —
    const grid = new THREE.GridHelper(120, 60, AMBER, 0x123)
    grid.material.transparent = true
    grid.material.opacity = 0.22
    grid.material.blending = THREE.AdditiveBlending
    grid.position.y = -7
    scene.add(grid)

    const mouse = { x: 0, y: 0 }
    const onMove = e => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove)

    const resize = () => {
      w = window.innerWidth
      h = window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', resize)

    const render = () => renderer.render(scene, camera)

    if (reduced) {
      wire.rotation.set(0.3, 0.5, 0)
      render()
      return () => {
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('resize', resize)
        renderer.dispose()
        if (renderer.domElement.parentNode)
          mount.removeChild(renderer.domElement)
      }
    }

    let raf
    let running = true
    let t = 0
    const loop = () => {
      if (!running) return
      raf = requestAnimationFrame(loop)
      t += 0.005
      const scrollN =
        window.scrollY /
        Math.max(1, document.body.scrollHeight - window.innerHeight)

      fieldCyan.rotation.y -= 0.0004
      fieldAmber.rotation.x += 0.0005
      wire.rotation.y += 0.0012
      wire.rotation.z += 0.0006

      // grid drifts toward camera (movement) + scroll accelerates it
      grid.position.z = ((t * 6 + scrollN * 60) % 4) - 2

      // breathing distortion
      const wp = icoGeo.attributes.position
      for (let i = 0; i < wp.count; i++) {
        const ix = i * 3
        const bx = basePos[ix]
        const by = basePos[ix + 1]
        const bz = basePos[ix + 2]
        const n =
          Math.sin(t * 1.6 + bx * 1.4 + by) * 0.12 +
          Math.cos(t + bz * 1.3) * 0.1
        const k = 1 + n * 0.16
        wp.array[ix] = bx * k
        wp.array[ix + 1] = by * k
        wp.array[ix + 2] = bz * k
      }
      wp.needsUpdate = true
      wire.geometry.dispose()
      wire.geometry = new THREE.WireframeGeometry(icoGeo)

      // scroll dolly + mouse parallax
      camera.position.x += (mouse.x * 1.4 - camera.position.x) * 0.04
      camera.position.y +=
        (-mouse.y * 1.0 + scrollN * 3 - camera.position.y) * 0.04
      camera.position.z = 10 - scrollN * 4
      camera.lookAt(0, scrollN * 1.5, 0)

      render()
    }
    raf = requestAnimationFrame(loop)

    const onVis = () => {
      running = !document.hidden
      if (running) raf = requestAnimationFrame(loop)
      else cancelAnimationFrame(raf)
    }
    document.addEventListener('visibilitychange', onVis)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVis)
      scene.traverse(o => {
        if (o.geometry) o.geometry.dispose()
        if (o.material) o.material.dispose && o.material.dispose()
      })
      renderer.dispose()
      if (renderer.domElement.parentNode) mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <Box
      ref={mountRef}
      position="fixed"
      inset={0}
      zIndex={0}
      pointerEvents="none"
      aria-hidden
    />
  )
}

export default Background
