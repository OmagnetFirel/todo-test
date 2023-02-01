import React from 'react';
import renderer from 'react-test-renderer';
import CriarTarefa from '../components/CreateTask';

describe('CriarTarefa', () => {
    it('should render correctly', () => {
        console.log("teste", CriarTarefa)
        const component = renderer.create(<CriarTarefa />).toJSON();
        expect(component).toMatchSnapshot();
    });
})
