import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import CategoryFilter from '../components/Categoryfilter';

describe('Testing Filter with static router', () => {
  it('Category component is defined', async () => {
    const component = render(
      <StaticRouter>
        <CategoryFilter ele={{}} categorySelect={jest.fn()} />
      </StaticRouter>,
    );
    expect(component).toBeDefined();
  });

  it('Category snapshot testing', () => {
    const category = renderer.create(
      <StaticRouter>
        <CategoryFilter ele={{}} categorySelect={jest.fn()} />
      </StaticRouter>,
    ).toJSON();
    expect(category).toMatchSnapshot();
  });
});
