const BASE_URL = "https://marvel-proxy.nomadcoders.workers.dev/v1/public";

export function getCharacterListUrl() {
  return `${BASE_URL}/characters?limit=50&orderBy=modified&series=24229,1058,2023`;
}

export function getCharacterDetailUrl(id) {
  return `${BASE_URL}/characters/${id}`;
}
