FILENAME = 2025-07-19-Sascha-Rose-CV

.PHONY: build

build: build-pdf create-svgs clean copy-to-cloud

build-pdf: 
	pdflatex -halt-on-error $(FILENAME).tex
	open $(FILENAME).pdf

create-svgs:
	pdf2svg $(FILENAME).pdf Sascha-Rose-CV-1.svg 1
	pdf2svg $(FILENAME).pdf Sascha-Rose-CV-2.svg 2
	pdf2svg $(FILENAME).pdf Sascha-Rose-CV-3.svg 3
	pdf2svg $(FILENAME).pdf Sascha-Rose-CV-4.svg 4

clean:
	rm -f *.aux *.log *.out *.toc

copy-to-cloud:
	rsync -av --progress *.pdf ~/Documents/Bewerbungsunterlagen

