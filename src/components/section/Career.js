import React, { Component } from "react";
import Input from "../atomic/Input";
import styles from "./styles/Career.module.css";
export class Career extends Component {
  render() {
    return (
      <div className={styles.career__section}>
        <h2>Career</h2>
        <section className={styles.careers}>
          <article className={styles.career}>
            <div className={styles.year__section}>
              <Input>
                <p>year</p>
              </Input>
              -
              <Input>
                <p>year</p>
              </Input>
            </div>
            <article className={styles.description}>
              <div className={styles.career__header}>
                <Input>
                  <h3>JOB TITLE</h3>
                </Input>
                <Input>
                  <p>Company name</p>
                </Input>
              </div>

              <div className={styles.career__desc}>
                <Input>
                  <p>
                    In a short statement of no more than a few sentences
                    describe your role in the company and outline your key and
                    main responsibilities. Give a brief outline of your job role
                    and also any other relevant duties that you did.
                  </p>
                </Input>
                <ul>
                  <li>Concisely describe your most relevant duties</li>
                  <li>Concisely describe your most relevant duties</li>
                  <li>Concisely describe your most relevant duties</li>
                  <li>Concisely describe your most relevant duties</li>
                  <li>Concisely describe your most relevant duties</li>
                </ul>
              </div>
            </article>
          </article>
        </section>
      </div>
    );
  }
}

export default Career;
