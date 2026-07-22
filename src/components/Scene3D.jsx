import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Scene3D({ className = '' }) {
  const mountRef = useRef(null)

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 6)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    // outer wireframe icosahedron — "py-blue"
    const outerGeo = new THREE.IcosahedronGeometry(1.9, 1)
    const outerMat = new THREE.MeshBasicMaterial({ color: 0x5a9bd8, wireframe: true, transparent: true, opacity: 0.8 })
    const outer = new THREE.Mesh(outerGeo, outerMat)
    scene.add(outer)

    // inner solid-ish icosahedron — "py-yellow" points
    const innerGeo = new THREE.IcosahedronGeometry(1.15, 0)
    const innerMat = new THREE.MeshBasicMaterial({ color: 0xffd43b, wireframe: true, transparent: true, opacity: 0.9 })
    const inner = new THREE.Mesh(innerGeo, innerMat)
    scene.add(inner)

    // scattered point cloud for depth
    const starGeo = new THREE.BufferGeometry()
    const starCount = 120
    const positions = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starMat = new THREE.PointsMaterial({ color: 0xb9c2d4, size: 0.035, transparent: true, opacity: 0.5 })
    const stars = new THREE.Points(starGeo, starMat)
    scene.add(stars)

    let raf
    const animate = () => {
      outer.rotation.x += 0.0028
      outer.rotation.y += 0.0038
      inner.rotation.x -= 0.0035
      inner.rotation.y -= 0.002
      stars.rotation.y += 0.0006
      renderer.render(scene, camera)
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(container)

    return () => {
      cancelAnimationFrame(raf)
      resizeObserver.disconnect()
      outerGeo.dispose()
      outerMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      starGeo.dispose()
      starMat.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className={className} aria-hidden="true" />
}
