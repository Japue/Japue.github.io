#include <SFML/Graphics.hpp>
#include <toml++/toml.hpp>
#include <iostream>
#include <string>

#include "basic_structs.h"
#include "tree.h"

int main() {

    //parsing
    int fractal = 0;
    int iterations = 2;
    float scaling = 0.5f;

    try {
        const toml::table tbl = toml::parse_file("config.toml");
        fractal = tbl["fractal"].value_or(fractal);
        iterations = tbl["iterations"].value_or(iterations);
        scaling = tbl["scaling"].value_or(scaling);
    } 
    catch (const toml::parse_error& err) {
        std::cerr << "TOML Error: " << err.description() << '\n';
        std::cerr << "Looked for file at: " << *err.source().path << "\n";
    }

    //window setup
    sf::RenderWindow window(sf::VideoMode({800, 600}), "Tree Fractal");
    sf::View view = window.getDefaultView();
    view.setCenter({0, 0});

    bool is_dragging = false;
    sf::Vector2i last_mouse_pos = sf::Mouse::getPosition(window);

    //fractal selection
    std::vector<Line> all_line_vector;
    switch (fractal) {
    case 0:
        all_line_vector = tree::simulate(iterations, view.getSize().x, scaling);
        break;
    }

    //gameloop
    while (window.isOpen()) {
        while (const std::optional event = window.pollEvent()) {

            //event handling
            if (event -> is<sf::Event::Closed>()) {
                window.close();
            }

            if (const auto* keyPressed = event -> getIf<sf::Event::KeyPressed>()) {
                if (keyPressed->code == sf::Keyboard::Key::Escape) {
                    window.close();
                }
            }

            if (const auto* mousePressed = event -> getIf<sf::Event::MouseButtonPressed>()) {
                if (mousePressed->button == sf::Mouse::Button::Left) {
                    is_dragging = true;
                }
            }
            
            if (const auto* mouseReleased = event -> getIf<sf::Event::MouseButtonReleased>()) {
                if (mouseReleased->button == sf::Mouse::Button::Left) {
                    is_dragging = false;
                }
            }

            if (const auto* scrolled = event -> getIf<sf::Event::MouseWheelScrolled>()) {
                if (scrolled->delta > 0) {
                    view.zoom(0.9f);
                } else {
                    view.zoom(1.1f);
                }
            }
        }

        window.clear();

        //dragging
        sf::Vector2i new_mouse_pos = sf::Mouse::getPosition(window);
        if (is_dragging) {
            sf::Vector2i delta_pos = last_mouse_pos - new_mouse_pos;

            sf::Vector2u window_size_u = window.getSize();
            sf::Vector2f window_size(static_cast<float>(window_size_u.x), static_cast<float>(window_size_u.y));
            sf::Vector2f view_size = view.getSize();

            sf::Vector2f scale_and_float(static_cast<float>(delta_pos.x) * (view_size.x / window_size.x), static_cast<float>(delta_pos.y) * (view_size.y / window_size.y));
            view.setCenter(view.getCenter() + scale_and_float);
        }
        last_mouse_pos = new_mouse_pos;
        window.setView(view);

        //drawing
        for (Line line : all_line_vector) {
            std::array line_array = {sf::Vertex{line.begin.to_sfvector()},
                                     sf::Vertex{line.end.to_sfvector()}};
            window.draw(line_array.data(), line_array.size(), sf::PrimitiveType::Lines);
        }

        window.display();
    }
}