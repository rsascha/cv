# CV Sascha Rose

![Page 1](assets/Sascha-Rose-CV-1.svg)
![Page 2](assets/Sascha-Rose-CV-2.svg)
![Page 3](assets/Sascha-Rose-CV-3.svg)
![Page 4](assets/Sascha-Rose-CV-4.svg)

![Arbeitszeugnis](assets/Arbeitszeugnis-Sascha-Rose-1.svg)
![Arbeitszeugnis](assets/Arbeitszeugnis-Sascha-Rose-2.svg)
![Arbeitszeugnis](assets/Arbeitszeugnis-Sascha-Rose-3.svg)

![Eintragungsbestätigung-IHK](assets/Eintragungsbestätigung-IHK-Sascha-Rose.svg)

## Development

Notes for setting up the development environment.

```sh
brew install basictex pdf2svg

sudo chown -R $(whoami) /usr/local/texlive/2025basic/
sudo chmod -R u+w /usr/local/texlive/2025basic/

tlmgr install titlesec
tlmgr install roboto
tlmgr install fontaxes
tlmgr install sectsty
tlmgr install collection-latexextra
```
