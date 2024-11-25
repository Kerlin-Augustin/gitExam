import { useState } from "react";
import QuizQuestion from "../QuizQuestions/QuizQuestion";
import QuizScoreBlock from "../QuizScoreBlock";
import QuizTitle from "../QuizTitle";

function QuizForm() {

  const [percentScore, setPercentScore] = useState(0);
  const [showScoreBlock, setShowScoreBlock] = useState(false);

  const correctAnswers: string[] = [
    'A',
    'B',
    'C',
    'B',
    'A',
    'D',
    'B',
    'D',
    'C',
    'D',
    'A',
    'D',
    'D',
    'B',
    'B',
    'C',
    'B',
    'A',
    'C',
    'B',
    'C',
    'A',
    'D',
    'A',
    'B'
  ]

  let userAnswer: { [key: string]: string }[] = [];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    userAnswer = []

    const formData: { [key: string]: string } = {};
    const formElements = event.currentTarget.elements;

    for (let i = 0; i < formElements.length - 1; i++) {
      const element = formElements[i] as HTMLInputElement;
      if (element.checked) {
        formData[element.name] = element.value;
      }
    }

    userAnswer.push(formData)

    let score: number = 0;
    correctAnswers.forEach((correct, index) => {
      const questionKey = `q${index + 1}`;
      if (formData[questionKey] === correct) {
        score++;
      }
    });

    const calculatedPercentScore = (score / correctAnswers.length) * 100;
    setPercentScore(calculatedPercentScore);
    setShowScoreBlock(true);

    scrollTo(0, 0)
  }

  return (
    <>
      <QuizTitle title="Git Exam" />
      <div className="quiz py-4 bg-primary">
        <div className="container">
          <h2 className="my-5 text-white">
            Just a little practice...
          </h2>
          <QuizScoreBlock percentScore={percentScore} show={showScoreBlock} />
          <form className="quiz-form text-light" onSubmit={handleSubmit}>
            <QuizQuestion
              inputName="q1"
              question="What is git?"
              questionNumber={1}
              option1="A Version Control System."
              option2="A request to fetch data!"
              option3="Graphical Interface Transfer."
              option4="All of the above."
            />
            <QuizQuestion
              inputName="q2"
              question="What is the terminal?"
              questionNumber={2}
              option1="A place at the airport."
              option2="A GUI that takes in commands!"
              option3="None of the above."
              option4="A list of terms!"
            />
            <QuizQuestion
              inputName="q3"
              question="What software actually runs on the terminal?"
              questionNumber={3}
              option1="The terminal is the software."
              option2="A container."
              option3="A shell."
              option4="A kernel."
            />
            <QuizQuestion
              inputName="q4"
              question="When you type something into the terminal what is that prompt called?"
              questionNumber={4}
              option1="A prompt."
              option2="A command."
              option3="A phrase."
              option4="A statement."
            />
            <QuizQuestion
              inputName="q5"
              question="What is meant by initializing a repo with git?"
              questionNumber={5}
              option1="Making that repo a git repo."
              option2="Creating a repo."
              option3="Both A and B."
              option4="Neither A or B."
            />
            <QuizQuestion
              inputName="q6"
              question="What is the importance of git?"
              questionNumber={6}
              option1="Virtually every tech company uses git."
              option2="Its extremely vast and powerful and helps you collab with other engineers."
              option3="If you are an engineer it is imperative that you learn git to share your work with your team."
              option4="All of the above."
            />
            <QuizQuestion
              inputName="q7"
              question="True or False: Git is Github?"
              questionNumber={7}
              option1="True"
              option2="False"
            />
            <QuizQuestion
              inputName="q8"
              question="Where do you use git?"
              questionNumber={8}
              option1="In gitlab."
              option2="Only in your IDE."
              option3="Only in github."
              option4="Git is used in the terminal on your machine."
            />
            <QuizQuestion
              inputName="q9"
              question="What is an OS? (Operating System)"
              questionNumber={9}
              option1="A medical hardware operating device."
              option2="It is what doctors use to save medical records in operating rooms."
              option3="It is the software that manages a computer’s hardware and provides services for computer programs."
              option4="Both A and B."
            />
            <QuizQuestion
              inputName="q10"
              question="What is a kernel?"
              questionNumber={10}
              option1="The Kernel is the guy who made the best fast food restaurant food."
              option2="A special type of doctor that helps connect surgeons to medical staff for the operating system."
              option3="The kernel is a video game software on every computer."
              option4="The kernel is the core component of an operating system. It acts as a bridge between the hardware and the software."
            />
            <QuizQuestion
              inputName="q11"
              question="What is github?"
              questionNumber={11}
              option1="Both C and D"
              option2="A coding language used to make repos."
              option3="A software that amplifies the power of git helping you work a lot more efficiently."
              option4="A web-based platform that provides hosting for software development and version control using Git."
            />
            <QuizQuestion
              inputName="q12"
              question="How do you get your code on Github?"
              questionNumber={12}
              option1="By creating a github account and writing all of your code online on your github account."
              option2="Once you connect you IDE to your github account whenever you save, the changes will be on github."
              option3="None of these answers are correct."
              option4="By using git commands to initialize a repo then using more git commands to push it to github."
            />
            <QuizQuestion
              inputName="q13"
              question="What is a Data Structure?"
              questionNumber={13}
              option1="A method for securing data in a database."
              option2="A type of algorithm used to solve computational problems."
              option3="A programming language used for managing large datasets."
              option4="A specialized format for organizing, managing, and storing data in a computer so that it can be accessed and modified efficiently."
            />
            <QuizQuestion
              inputName="q14"
              question="What is Tree Data Structure?"
              questionNumber={14}
              option1="A data structure used for linear data storage, like an array or a list."
              option2="A non-linear data structure, with nodes connected by edges, with one node as the root, and others as children."
              option3="A data structure where each element is connected to the previous and next element."
              option4="A type of database used to store structured data in tabular form."
            />
            <QuizQuestion
              inputName="q15"
              question="Which one is not a part of a Tree Data Structure?"
              questionNumber={15}
              option1="Root node - The eldest parent of the tree."
              option2="Safe Zone - The center of the tree."
              option3="Edges - The lines that connect the node to its children or parent."
              option4="Leaf nodes - Nodes that have no children."
            />
            <QuizQuestion
              inputName="q16"
              question="What does the pwd command stand for?"
              questionNumber={16}
              option1="Present working directory"
              option2="Path working directory"
              option3="Print working directory"
              option4="Print writable directory"
            />
            <QuizQuestion
              inputName="q17"
              question="How do you traverse to the root directory in your computer’s file system tree using the terminal?"
              questionNumber={17}
              option1="cd .."
              option2="cd /"
              option3="cd root"
              option4="cd ./"
            />
            <QuizQuestion
              inputName="q18"
              question="How do you list out all of the children in this node directory using the terminal?"
              questionNumber={18}
              option1="ls command"
              option2="lss command"
              option3="files command"
              option4="list command"
            />
            <QuizQuestion
              inputName="q19"
              question="How do you create a new directory using the terminal?"
              questionNumber={19}
              option1="mkdirr command"
              option2="newdir command"
              option3="mkdir command"
              option4="creatdir command"
            />
            <QuizQuestion
              inputName="q20"
              question="How do you create a file called index.html using the terminal?"
              questionNumber={20}
              option1="create index.html"
              option2="touch index.html"
              option3="mkfile index.html"
              option4="newfile index.html"
            />
            <QuizQuestion
              inputName="q21"
              question="What's the difference between a git command and a regular command?"
              questionNumber={21}
              option1="Git commands are used for creating directories, while regular commands manage files."
              option2="Git commands are executed in a different terminal than regular commands."
              option3="Git commands are specifically designed to interact with the VCS, a regular command typically refers to commands used for general system operations in the terminal."
              option4="Git commands require internet access, while regular commands do not."
            />
            <QuizQuestion
              inputName="q22"
              question="What physical changes happen when you do git init inside a directory?"
              questionNumber={22}
              option1="A .git repo is created."
              option2="It creates a new file called gitconfig in the root directory."
              option3="It replaces existing files with new versions."
              option4="It removes all existing files and directories from the directory."
            />
            <QuizQuestion
              inputName="q23"
              question="What is branching in git?"
              questionNumber={23}
              option1="Branching in Git is the process of copying files to a new directory."
              option2="Branching in Git is the method for merging changes from one repository to another."
              option3="Branching in Git refers to creating backup copies of the entire repository."
              option4="Isolating different lines of development within a repository, allowing independent changes and experimentation."
            />
            <QuizQuestion
              inputName="q24"
              question="What is the process of making a new branch in git?"
              questionNumber={24}
              option1="git checkout -b {branch-name}"
              option2="git check {branch-name}"
              option3="git newbranch {branch-name}"
              option4="git add branch {branch-name}"
            />
            <QuizQuestion
              inputName="q25"
              question="What is meant by the term git surgery?"
              questionNumber={25}
              option1="A process for backing up a Git repository to prevent data loss."
              option2="Advanced or complex operations involving careful manipulation of Git history and repository structure."
              option3="A method for restoring deleted branches in Git."
              option4="A command for fixing merge conflicts in Git."
            />
            <div className="text-center">
              <input
                type="submit"
                className="btn btn-light"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default QuizForm;
