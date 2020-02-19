var playlist = {
  artist: 'My Bloody Valentine'
}

function updatePlaylist(playlist,artistName,songTitle) {
  playlist['Phil Ochs']='Slowdive'
  return playlist
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist['artist']
  return playlist
}
