import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Form from './Form';
import Loading from './Loading';
import ShallowRenderer from 'react-test-renderer/shallow'; 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('initially renders form', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const result = renderer.getRenderOutput();

  expect(result.type).toEqual(Form);
  expect(result.props).toEqual({
    email: '',
    name: '',
    errorMsg: '',
    onInputChanged: expect.any(Function),
    onSubmit: expect.any(Function)
  });
})

it('renders error message when submitting empty form', () => {
  const uploadFn = jest.fn();

  const renderer = new ShallowRenderer();
  const component = renderer.render(<App uploadFn={uploadFn} />);

  component.props.onSubmit();

  const result = renderer.getRenderOutput();
  expect(result.type).toEqual(Form)
  expect(result.props).toEqual(expect.objectContaining({
    errorMsg: 'Nombre es requerido.'
  }))

  expect(uploadFn).not.toHaveBeenCalled();
})

it('renders Loading and calls uploadFn if submiitted valid data', () => {
  const uploadFn = jest.fn();

  const renderer = new ShallowRenderer();
  const component = renderer.render(<App uploadFn={uploadFn} />);

  component.props.onInputChanged('name', 'gabriel');
  component.props.onInputChanged('email', 'gabriel@gmail.com');
  component.props.onSubmit();

  const result = renderer.getRenderOutput();
  expect(result.type).toEqual(Loading)

  expect(uploadFn).toHaveBeenCalledWith({
    name: 'gabriel',
    email: 'gabriel@gmail.com'
  });
})
