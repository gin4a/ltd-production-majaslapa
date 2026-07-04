"use client"

import { Waves } from "@/components/ui/wave-background"

export function MeshBackground() {
  return (
    <div className="fixed inset-0" style={{ zIndex: 0 }}>
      <Waves
        strokeColor="rgba(255,255,255,0.10)"
        backgroundColor="#000000"
        pointerSize={0}
        xGap={28}
        yGap={22}
      />
    </div>
  )
}
