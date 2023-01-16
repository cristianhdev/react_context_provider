import React, { useContext, useEffect, useState, useMemo } from 'react';
import { UserContext } from '../context/UserContext';
export const ItedmData = () => {
  const [dataItems, setDataItem] = useState([]);

  let itemListComponents = null;
  const data = useContext(UserContext);
  console.log('data', data);

  useEffect(() => {}, [data]);

  const onChangeEstate = (id) => {
    let item = data.find((item) => item.id === id);
    item.completed = !item.completed;
    setDataItem({
      item,
      ...data,
    });
  };

  if (data.length != 0) {
    itemListComponents = (
      <div>
        <ul>
          {data.map((item) => {
            return (
              <>
                <li
                  className={`text-left ${
                    item.completed ? 'text-decoration-line-through' : ''
                  }`}
                  key={item.id}
                >
                  {item.title}
                </li>
                <button
                  className={`btn  ${
                    item.completed ? 'btn-success' : 'btn-danger'
                  }`}
                  onClick={() => onChangeEstate(item.id)}
                >
                  {item.completed ? 'completado' : 'incompleto'}
                </button>
              </>
            );
          })}
        </ul>
        <div></div>
      </div>
    );
  }

  return itemListComponents;
};
