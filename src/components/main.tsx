"use client"

import { TechStackBlock } from "./blocks/techstack_block"
import { GitHubBlock } from "./blocks/github_block"
import { LocationBlock } from "./blocks/location_block"
import { ProjectsBlock } from "./blocks/projects_block"
import { AvatarBlock } from "./blocks/avatar_block"
import { PhotosBlock } from "./blocks/photos_block"
import { SpotifyBlock } from "./blocks/spotify_block"

export function Main() {
  return (
     <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-6 p-20 sm:p-24 lg:h-screen md:h-full" style={{ gridAutoRows: 'minmax(50px, auto)', gridAutoColumns: 'minmax(50px, auto)',  gridTemplateRows: 'repeat(auto-fill, minmax(0, 1fr)', overflow: 'hidden'}}>

      {/* Project Block takes up two columns */}
      <ProjectsBlock/>

      <GitHubBlock />
      <LocationBlock />


      <AvatarBlock />
      <PhotosBlock />

      <TechStackBlock />

      {/* Spotify Block takes up two rows */}
      <SpotifyBlock/>
    </div>
  )
}
