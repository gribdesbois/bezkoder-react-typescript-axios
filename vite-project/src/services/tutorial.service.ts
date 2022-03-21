/* eslint-disable class-methods-use-this */
import http from '../http-common'
import ITutorialData from '../types/tutorial.type'

class TutorialDataService {
  getAll() {
    return http.get<Array<ITutorialData>>('/tutorials')
  }

  get(id: string) {
    return http.get<ITutorialData>(`/tutorials/${id}`)
  }

  create(data: ITutorialData) {
    return http.post<ITutorialData>('/tutorials', data)
  }

  update(data: ITutorialData, id: string) {
    return http.put<string>(`/tutorials/${id}`, data)
  }

  delete(id: string) {
    return http.delete<string>(`/tutorials/${id}`)
  }

  deleteAll() {
    return http.delete<any>(`/tutorials`)
  }

  findByTitle(title: string) {
    return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`)
  }
}

export default new TutorialDataService()
