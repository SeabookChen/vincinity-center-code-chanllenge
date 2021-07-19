function makeRequest(path: string, resourceType: string) {}

export function getNewReleases() {
  return makeRequest("new-releases", "albums")
}

export function getFeaturedPlaylists() {
  return makeRequest("featured-playlists", "playlists")
}
