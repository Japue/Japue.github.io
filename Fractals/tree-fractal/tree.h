#pragma once

#include <vector>
#include "basic_structs.h"

std::vector<Line> iterate(float scaling, const std::vector<Line>& previous_line_vector, std::vector<Line>& all_line_vector);

std::vector<Line> simulate_tree(int iterations, float window_height, float scaling);