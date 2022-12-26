---
title: "FAD: Feature Alignment Discriminator for Text Summarization"
tags:
  - "AbstractiveTextSummary"
  - "GAN"
  - "NLP"
date: 2022-12-10
path: "projects/fad"
excerpt: A building block useful in the fine-tuning process for text generators like BART, which addresses problems of discreteness in adversarial learning for NLP, better captures the word distribution, and achieves SOTA ROUGE score of abstractive text summarization in DailyMail/CNN dataset. 
# selected: true
cover: "./preview.png"
links:
  - name: "pdf"
    url: "fad.pdf"
  - name: "Github"
    url: "https://github.com/zxp46/EECS487_Project_FAD"
priority: 20
---

## Introduction
This is the course project for [EECS 487 Intro to Natural Language Processing](https://web.eecs.umich.edu/~wangluxy/courses/eecs487_wn2022/eecs487_wn2022.html)(NLP) and my first project about NLP, conducted with Zixuan Pan and Jiarui Liu. "Fad" as our project name is, my interest in NLP is not :)
## Demo
Please refer to the paper for detailed methodology, experiments, results and analysis. For a quick demo here, compared to the base line model (BART-base), FAD managed to sift out unimportant info and generate more abstractive and concise summaries.
![demo](./demo.png)
