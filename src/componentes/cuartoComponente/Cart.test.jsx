import { render, screen, fireEvent } from "@testing-library/react";
import { Cart } from "./Cart";

jest.mock('./Cart.css', () => '')
describe('Pruebas a componente', () => {
    test('Renderizar componente', () => {
        const { container } = render(<Cart />);
        expect(container).toMatchSnapshot();
    });

    test('Traer imagen', () => {
        render(<Cart />);
        const { src } = screen.getByRole('img');
        expect(src).toEqual('https://img.freepik.com/vector-gratis/diseno-logotipo-tienda-ropa-diseno-plano_23-2149496415.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1701043200&semt=ais');
    });

    test('Validar texto null', () => {
        render(<Cart />);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain('');
    });

    test('Identificar texto', () => {
        render(<Cart />);
        fireEvent.click(screen.getByRole('img'));
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain('Luis');
    });
})