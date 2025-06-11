# Car Villa - 3D Car Showcase Website

A modern web application that showcases various car models in an interactive 3D viewer. Built with HTML, CSS, JavaScript, and Three.js.

## Features

- Interactive 3D car model viewer
- Search functionality with multiple filters (year, make, model, etc.)
- Responsive design
- High-quality 3D models with optimized loading
- Dynamic lighting and camera controls

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Three.js for 3D rendering
- Bootstrap for responsive design
- jQuery for DOM manipulation

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/car-villa.git
```

2. Install Git LFS (required for 3D model files):

```bash
# Windows (with Chocolatey)
choco install git-lfs

# macOS (with Homebrew)
brew install git-lfs

# Linux
sudo apt install git-lfs  # Ubuntu/Debian
sudo yum install git-lfs  # CentOS/RHEL
```

3. Initialize Git LFS:

```bash
git lfs install
```

4. Pull the LFS files:

```bash
git lfs pull
```

5. Open the project in your preferred code editor

6. Open `index.html` in your web browser to view the website

## Project Structure

```
car-villa/
├── assets/
│   ├── css/
│   ├── js/
│   ├── models/     # 3D model files (tracked with Git LFS)
│   └── images/
├── index.html
└── README.md
```

## Important Notes

- This project uses Git LFS to handle large 3D model files
- Make sure you have Git LFS installed before cloning the repository
- Some 3D models are large (>100MB) and require Git LFS to be properly tracked
- If models are not loading, ensure you've run `git lfs pull` after cloning

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Three.js for the 3D rendering capabilities
- Bootstrap for the responsive design framework
- All the 3D model creators and contributors
