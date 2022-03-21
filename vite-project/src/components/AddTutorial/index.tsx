import { ResponseType } from 'axios'
import React, { Component, ChangeEvent } from 'react'
import { PromptProps } from 'react-router-dom'
import TutorialDataService from '../../services/tutorial.service'
import ITutorialData from '../../types/tutorial.type'

type Props = {}
type State = ITutorialData & {
  submitted: boolean
}

export default class AddTutorial extends Component<PromptProps, State> {
  constructor(props: Props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.saveTutorial = this.saveTutorial.bind(this)
    this.newTutorial = this.newTutorial.bind(this)
    this.state = {
      id: null,
      title: '',
      name: '',
      description: '',
      published: false,
      submitted: false,
    }
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      title: e.target.value,
    })
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      description: e.target.value,
    })
  }

  saveTutorial() {
    const data: ITutorialData = {
      title: this.state.title,
      description: this.state.description,
    }
    TutorialDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,
          submitted: true,
        })
        console.log(response.data)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  newTutorial() {
    this.setState({
      id: null,
      title: '',
      description: '',
      published: false,
      submitted: false,
    })
  }

  render() {
    return <div>AddTutorial</div>
  }
}
