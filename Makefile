FILENAME = 2025-07-19-Sascha-Rose-CV

.PHONY: build

build: build-pdf clean copy-to-cloud

build-pdf: 
	pdflatex -halt-on-error $(FILENAME).tex
	open $(FILENAME).pdf

copy-to-cloud:
	rsync -av --progress *.pdf ~/Documents/Bewerbungsunterlagen

clean:
	rm -f *.aux *.log *.out *.toc
