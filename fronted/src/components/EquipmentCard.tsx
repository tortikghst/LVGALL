// src/components/EquipmentCard.tsx
import { useNavigate } from 'react-router-dom';
import type { Equipment } from '../api/types';
import './EquipmentCard.css';

interface EquipmentCardProps {
    equipment: Equipment;
}

export default function EquipmentCard({ equipment }: EquipmentCardProps) {
    const navigate = useNavigate();

    return (
        <div
            className="equipment-card"
            onClick={() => navigate(`/equipment/${equipment.id}`)}
        >
            <div className="equipment-card__image-wrapper">
                <img
                    src={equipment.images?.[0] || '/src/image/ehf.png'}
                    alt={equipment.name}
                    className="equipment-card__image"
                />
                {equipment.delivery && (
                    <span className="equipment-card__badge">Доставка</span>
                )}
            </div>
            <div className="equipment-card__body">
                <h3 className="equipment-card__name">{equipment.name}</h3>
                <p className="equipment-card__city">📍 {equipment.city}</p>
                <div className="equipment-card__footer">
                    <span className="equipment-card__price">
                        {equipment.price.toLocaleString('ru-RU')} ₽<span>/день</span>
                    </span>
                    {equipment.category && (
                        <span className="equipment-card__category">{equipment.category.name}</span>
                    )}
                </div>
            </div>
        </div>
    );
}