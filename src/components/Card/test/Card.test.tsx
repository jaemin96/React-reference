import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';

describe('card', () => {
  const cardInfo = {
    title: '소금입법',
    subtitle: '박탈당했어',
    description:
      '모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와 권리의 본질적인 내용을 침해할 수 없다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.',
    url: '#',
    alt: '소금입법',
  };

  it('render card', () => {
    const { title, subtitle, description, url, alt } = cardInfo;
    render(
      <MemoryRouter>
        <Card title={title} subtitle={subtitle} description={description} url={url} alt={alt} />
      </MemoryRouter>
    );

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', url);
    expect(image).toHaveAttribute('alt', alt);
    expect(image.getAttribute('src')).toEqual(url);
    expect(image.getAttribute('alt')).toEqual(alt);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(subtitle)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('navigates to detail card page with card state when clicked', () => {
    const { title, subtitle, description, url, alt } = cardInfo;
    const StateDisplay = () => {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    };

    render(
      <MemoryRouter initialEntries={['/test']}>
        <Routes>
          <Route
            path="/test"
            element={<Card title={title} subtitle={subtitle} description={description} url={url} alt={alt} />}
          ></Route>
          <Route path={`/card/detail/${1}`} element={<StateDisplay />}></Route>
        </Routes>
      </MemoryRouter>
    );
  });
});
