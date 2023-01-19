import { useState } from 'react';
import Card from './components/Card';
import cards from './data/data';
import './scss/app.scss';

const App = () => {
  const [renderCards, setCards] = useState(cards);

  const toggleCardandler = (id: number) => {
    setCards(
      renderCards.map((card) =>
        card.id === id
          ? { ...card, isCompleted: !card.isCompleted }
          : { ...card }
      )
    );
  };

  return (
    <div className="container">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <div className="Cards">
        {renderCards.map((value, index) => (
          <Card
            id={value.id}
            key={index}
            title={value.title}
            categoria={value.categoria}
            portion={value.portion}
            gift={value.gift}
            images={value.images}
            weight={value.weight}
            disabled={value.disabled}
            desc={value.desc}
            satisfied={value.satisfied}
            isCompleted={value.isCompleted}
            onSelectCard={toggleCardandler}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
