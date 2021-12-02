export function getHotelsList(){
    return fetch(`https://obmng.dbm.guestline.net/api/hotels?collection-id=OBMNG`)
     .then((res) => res.json())
 }
 export function getRoomsInHotel(id){
    return fetch(`https://obmng.dbm.guestline.net/api/roomRates/OBMNG/${id} `)
    .then((res) => res.json())
}
