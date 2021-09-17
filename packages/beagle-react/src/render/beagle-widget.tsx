/*
  * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *  http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
*/

import React, { FC } from 'react'
import { BeagleView } from '@zup-it/beagle-web'
import useWidget from 'common/useWidget'
import createReactComponentTree from 'common/renderer'
import BeagleId from './BeagleId'

let nextKey = 0

const BeagleWidget: FC<{ id?: string, view: BeagleView }> = ({
  id = `beagle-widget:${++nextKey}`,
  view,
}) => {
  const { beagleService, uiTree } = useWidget(id, view)

  const components = beagleService.getConfig().components
  const contentManagerMap = beagleService.viewContentManagerMap

  if (!uiTree) return <></>
  return createReactComponentTree(components, uiTree, id, contentManagerMap, BeagleId)
}

export default BeagleWidget
