# Utilbelt
Utilbelt is intended to be a toolbelt for common tasks required on desktops. Built with Electron and uses `electron-forge`

## Proposed Features

### Files
- Change image file formats
- Change audio file formats

### Images
- Crop/Resize Images
- Vectorize Image
- Remove background of image and turn into png


### Audio
- Trim ends of audio



## Setup
First ensure that Node is installed, there may be additional dependencies required for Electron

Install 
```
npm i 
```

## Running
```
npm start
```

## Building

The following packages for your current platform:
```
npm run make
```

To package for a specific platform:
```
npm run make -- --platform win32
```