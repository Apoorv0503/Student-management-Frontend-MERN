#!/bin/bash

# Define the base directory (current directory)
BASE_DIR=$(pwd)

# Create the directory structure
mkdir -p "$BASE_DIR/src/components/Auth"
mkdir -p "$BASE_DIR/src/components/Students"
mkdir -p "$BASE_DIR/src/components/Layout"
mkdir -p "$BASE_DIR/src/redux/auth"
mkdir -p "$BASE_DIR/src/redux/students"
mkdir -p "$BASE_DIR/src/utils"

# Create the files in their respective directories
touch "$BASE_DIR/src/components/Auth/Login.js"
touch "$BASE_DIR/src/components/Students/EditStudentModal.js"
touch "$BASE_DIR/src/components/Students/StudentList.js"
touch "$BASE_DIR/src/components/Students/AddStudentModal.js"
touch "$BASE_DIR/src/components/Layout/Navbar.js"
touch "$BASE_DIR/src/redux/store.js"
touch "$BASE_DIR/src/redux/auth/authSlice.js"
touch "$BASE_DIR/src/redux/auth/authActions.js"
touch "$BASE_DIR/src/redux/students/studentSlice.js"
touch "$BASE_DIR/src/redux/students/studentActions.js"
touch "$BASE_DIR/src/App.js"
touch "$BASE_DIR/src/index.js"
touch "$BASE_DIR/src/utils/api.js"

echo "Directory structure and files created successfully."

