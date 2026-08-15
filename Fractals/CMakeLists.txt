cmake_minimum_required(VERSION 3.10)
project(fractals)

set(CMAKE_CXX_STANDARD 17)
set(LIBS_DIR "X:/Files/CodingProjects/CppLibraries")
get_filename_component(TARGET "${CMAKE_CURRENT_SOURCE_DIR}" NAME)

add_executable(${TARGET} main.cpp tree-fractal/tree.cpp)

#SFML
target_include_directories(${TARGET} PRIVATE ${LIBS_DIR}/SFML/include)
target_link_directories(${TARGET} PRIVATE ${LIBS_DIR}/SFML/lib)
target_link_libraries(${TARGET} PRIVATE sfml-graphics sfml-window sfml-system)
add_custom_command(TARGET ${TARGET} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E copy_directory
        "${LIBS_DIR}/SFML/bin"
        "$<TARGET_FILE_DIR:${TARGET}>"
)


#TOML
target_include_directories(${TARGET} PRIVATE ${LIBS_DIR}/TOML/include)
add_custom_command(TARGET ${TARGET} POST_BUILD
    COMMAND ${CMAKE_COMMAND} -E create_hardlink
        "${CMAKE_CURRENT_SOURCE_DIR}/config.toml"
        "$<TARGET_FILE_DIR:${TARGET}>/config.toml"
)