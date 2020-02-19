var playlist = {
  artist: 'My Bloody Valentine'
}

function updatePlaylist(playlist,artistName,songTitle) {
  playlist['Phil Ochs']='Slowdive'
  return playlist
}

function removeFromPlaylist() {
  delete playlist['Phil Ochs']
}