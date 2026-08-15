#pragma once

#include <SFML/Graphics.hpp>
#include "basic_structs.h"

inline sf::Vector2f to_sfvector(Point point) {return sf::Vector2f(point.x, point.y);}

inline Point to_point(sf::Vector2f vector) {return Point(vector.x, vector.y);}