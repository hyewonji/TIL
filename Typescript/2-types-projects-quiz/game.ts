/**
 * Let's make a game 🕹
 */
{
  type Action = 'up' | 'down' | 'left' | 'right'
  type Position = {
    x: number;
    y: number;
  }

  const position: Position = {
    x: 0,
    y: 0
  }

  function move(action: Action): Position {
    switch (action) {
      case 'up':
        position.y += 1
      case 'down':
        position.y -= 1
      case 'left':
        position.x -= 1
      case 'right':
        position.x += 1
      default:
        throw new Error('Unknown Action')
    }
  }

  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}
