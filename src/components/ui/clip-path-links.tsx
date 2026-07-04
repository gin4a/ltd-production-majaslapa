"use client"

import React from "react"
import { SiWhatsapp, SiDiscord } from "react-icons/si"
import { Instagram, Mail } from "lucide-react"
import { useAnimate } from "framer-motion"

export const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-white/10 border border-white/10">
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <LinkBox Icon={Instagram} href="https://www.instagram.com/ltdproducion/" />
        <LinkBox Icon={SiDiscord} href="https://discordapp.com/users/1474491589358256271" />
      </div>
      <div className="grid grid-cols-2 divide-x divide-white/10">
        <LinkBox Icon={SiWhatsapp} href="https://wa.me/37129175051" />
        <LinkBox Icon={Mail} href="mailto:gin4a@ltdproduction.net" />
      </div>
    </div>
  )
}

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)"
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)"
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)"
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)"

const ENTRANCE_KEYFRAMES: Record<string, string[]> = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
}

const EXIT_KEYFRAMES: Record<string, string[]> = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
}

const LinkBox = ({
  Icon,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>
  href: string
}) => {
  const [scope, animate] = useAnimate()

  const getNearestSide = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const box = e.currentTarget.getBoundingClientRect()
    const sides = [
      { proximity: Math.abs(box.left - e.clientX), side: "left" },
      { proximity: Math.abs(box.right - e.clientX), side: "right" },
      { proximity: Math.abs(box.top - e.clientY), side: "top" },
      { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" },
    ].sort((a, b) => a.proximity - b.proximity)
    return sides[0].side
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[getNearestSide(e)] })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[getNearestSide(e)] })
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative grid h-24 w-full place-content-center text-white bg-white/5"
    >
      <Icon className="text-2xl sm:text-3xl" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-white text-black"
      >
        <Icon className="text-2xl sm:text-3xl" />
      </div>
    </a>
  )
}
