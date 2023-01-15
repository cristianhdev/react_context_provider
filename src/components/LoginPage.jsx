import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { data } from '../data/datadb';

export const LoginPage = () => {
  const [dataItem, setDataItem] = useState([]);
  let itemListComponents = null;

  const onChangeEstate = (id) => {
    console.log(id);

    let item = dataItem.find((item) => item.id === id);
    item.completed = !item.completed;
    setDataItem({
      ...dataItem,
      item,
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
                    !item.completed ? 'text-decoration-line-through' : ''
                  }`}
                  key={item.id}
                >
                  {item.title}
                </li>
                <button
                  className={`btn btn-primary ${
                    !item.completed ? 'disabled' : ''
                  }`}
                  onClick={() => onChangeEstate(item.id)}
                >
                  completado
                </button>
              </>
            );
          })}
        </ul>
        <div></div>
      </div>
    );
  }

  const { title } = useContext(UserContext);
  console.log(title);

  useEffect(() => {
    console.log(data);
    setDataItem(data);
  }, [dataItem]);

  return (
    <>
      <h1>Login Page {title}</h1>
      {itemListComponents}
      {/* <pre>{JSON.stringify(info, null, 2)}</pre> */}
    </>
  );
};
