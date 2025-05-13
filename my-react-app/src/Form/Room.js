import React from 'react';

export function getData() {
  return [
    {
      id: 1,
      name: "Phòng Deluxe",
      type: "Đơn",
      price: 500000,
      image: "images/deluxe.jpg",
      description: "Phòng đơn sang trọng với view biển.",
      status: "available",
      capacity: 2,
      area: 25
    },
    {
      id: 2,
      name: "Phòng Superior",
      type: "Đôi",
      price: 800000,
      image: "images/superior.jpg",
      description: "Phòng đôi rộng rãi với ban công riêng.",
      status: "available",
      capacity: 4,
      area: 35
    }
  ];
}

export default function Room({ room }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={room.image} className="card-img-top" alt={room.name} />
      <div className="card-body">
        <h5 className="card-title">{room.name}</h5>
        <p className="card-text">{room.description}</p>
        <p>Giá: {room.price} VNĐ / đêm</p>
        <p>Loại phòng: {room.type}</p>
        <p>Sức chứa: {room.capacity} người</p>
        <p>Diện tích: {room.area} m²</p>
        <button className="btn btn-primary">Đặt phòng</button>
      </div>
    </div>
  );
}
