import { fireEvent, render, screen } from '@testing-library/react';
import { Modal } from './Modal';

test('Modal renders', () => {
  const spyFn = jest.fn();

  const props = {
    title: 'Título de la modal',
    description: 'Descripción de la modal',
    onClickClose: spyFn,
  };

  expect(render(<Modal {...props} />)).toMatchSnapshot();

  screen.getByText(props.title);
  screen.getByText(props.description);

  fireEvent(
    screen.getByText('Cerrar'),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(spyFn).toBeCalledTimes(1);
});
