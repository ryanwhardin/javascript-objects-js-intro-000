var playlist = {
  'My Bloody Valentine': 'Sometimes',
  'Alison': 'Slowdive'
}

function updatePlaylist(playlist,artistName,songTitle) {
  playlist['Phil Ochs']=`Here's to the State of Mississippi`
  return playlist
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artist:'My Bloody Valentine']
  return playlist
}
