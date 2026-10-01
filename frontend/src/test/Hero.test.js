import React from "react";
import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Hero from "../landing_page/Home/Hero"

// Test suite

describe("Hero Component",()=> {
    test('render hero image',()=>{
        render(<Hero />);
        const heroImage = screen.getByAltText('Hero Image');
        expect(heroImage).not.toBeNull();
        expect(heroImage).toHaveAttribute('src', 'media/images/homeHero.png');
    })
})