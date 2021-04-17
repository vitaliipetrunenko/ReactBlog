Решение тестового задания в соответствии со спецификацией
 
1. Display a list of all Posts ✅
2. Display a specific Post and its comments ✅
3. Create a new Post ✅
4. Update Post's information – title and body ✅
5. Delete a Post ✅
6. Create a new Comment ✅

Стэк:

TypeScript - не использовался
React v16+ ✅
React Hooks ✅
Redux or similar state management approach ✅ - Redux
React Router or Reach Router ✅ - React-router
styled-components is preferred for styling (or any other approach if you aren't familiar with CSS-in-JS) ✅ - в основном использовался простой SCSS-стайлинг, но для примера использовался styled-components
ESLint and Prettier for code style consistency is strongly recommended ✅ ESLint & Prettier

Над дизайном сильно не трудился

Для запросов использовался Axios,
Предпочтение было отдано функциональным компонентам и хукам,
Где необходимо, использовались Хоки React-Redux и контейнерные компоненты для обеспечения чистоты и "тупости" презентационных компонентов.
Запросы на получение в грязных компонентах, на изменение - в редюсере, Thunk/Saga не использовал.

Спасибо за внимание.
 `npm start`


