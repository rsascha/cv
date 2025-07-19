FILENAME = 2025-07-19-Sascha-Rose-CV

.PHONY: build

build: build-pdf pdf2svg clean copy-to-cloud

build-pdf: 
	pdflatex -halt-on-error $(FILENAME).tex
	open $(FILENAME).pdf

pdf2svg:
	pdf2svg $(FILENAME).pdf assets/Sascha-Rose-CV-1.svg 1
	pdf2svg $(FILENAME).pdf assets/Sascha-Rose-CV-2.svg 2
	pdf2svg $(FILENAME).pdf assets/Sascha-Rose-CV-3.svg 3
	pdf2svg $(FILENAME).pdf assets/Sascha-Rose-CV-4.svg 4

	for f in assets/Sascha-Rose-CV-*.svg; do \
		sed -i '' 's/<svg /<svg /' $$f; \
		sed -i '' 's/<defs>/<rect width="100%" height="100%" fill="white"\/><defs>/' $$f; \
	done

	pdf2svg Arbeitszeugnis-Sascha-Rose.pdf assets/Arbeitszeugnis-Sascha-Rose-1.svg 1
	pdf2svg Arbeitszeugnis-Sascha-Rose.pdf assets/Arbeitszeugnis-Sascha-Rose-2.svg 2
	pdf2svg Arbeitszeugnis-Sascha-Rose.pdf assets/Arbeitszeugnis-Sascha-Rose-3.svg 3

	pdf2svg Eintragungsbestätigung-IHK-Sascha-Rose.pdf assets/Eintragungsbestätigung-IHK-Sascha-Rose.svg

	for f in assets/Arbeitszeugnis-Sascha-Rose-1*.svg; do \
		sed -i '' 's/<svg /<svg /' $$f; \
		sed -i '' 's/<defs>/<rect width="100%" height="100%" fill="white"\/><defs>/' $$f; \
	done

	sed -i '' 's/<svg /<svg /' assets/Eintragungsbestätigung-IHK-Sascha-Rose.svg
	sed -i '' 's/<defs>/<rect width="100%" height="100%" fill="white"\/><defs>/' assets/Eintragungsbestätigung-IHK-Sascha-Rose.svg

clean:
	rm -f *.aux *.log *.out *.toc

copy-to-cloud:
	rsync -av --progress *.pdf ~/Documents/Bewerbungsunterlagen

