export const emailRegex = new RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

export const passwordRegex = new RegExp(
  /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
);

export const spotifyTrackRegex = new RegExp(
  /^https?:\/\/(?:open|play)\.spotify\.com\/track\/[\w\d]+$/i
);

export const spotifyAlbumRegex = new RegExp(
  /^https?:\/\/(?:open|play)\.spotify\.com\/album\/[\w\d]+$/i
);
