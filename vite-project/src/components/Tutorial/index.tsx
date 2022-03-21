import React, { Component, ChangeEvent } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import TutorialDataService from '../../services/tutorial.service'
import ITutorialData from '../../types/tutorial.type'

interface RouterProps {
  // type from `match.params`
  id: string
}

type Props = RouteComponentProps<RouterProps>
type State = {
  currentTutorial: ITutorialData
  message: string
}

export default class Tutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.getTutorial = this.getTutorial.bind(this)
    this.updatePublished = this.updatePublished.bind(this)
    this.updateTutorial = this.updateTutorial.bind(this)
    this.deleteTutorial = this.deleteTutorial.bind(this)
    this.state = {
      currentTutorial: {
        id: null,
        title: '',
        description: '',
        published: false,
      },
      message: '',
    }
  }

  componentDidMount() {
    this.getTutorial(this.props.match.params.id)
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    const title = e.target.value
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        title,
      },
    }))
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    const description = e.target.value
    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description,
      },
    }))
  }

  getTutorial(id: string) {
    TutorialDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentTutorial: response.data,
        })
        console.log(response.data)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  updatePublished(status: boolean) {
    const data: ITutorialData = {
      id: this.state.currentTutorial.id,
      title: this.state.currentTutorial.title,
      description: this.state.currentTutorial.description,
      published: status,
    }
    TutorialDataService.update(data, this.state.currentTutorial.id)
      .then((response: any) => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
          message: 'The status was updated successfully!',
        }))
        console.log(response.data)
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  updateTutorial() {
    TutorialDataService.update(
      this.state.currentTutorial,
      this.state.currentTutorial.id
    )
      .then((response: any) => {
        console.log(response.data)
        this.props.history.push('/tutorials')
      })
      .catch((e: Error) => {
        console.log(e)
      })
  }

  render() {
    return <div>Tutorial</div>
  }
}
