import DashboardViewTitle from '../components/Dashboard/DashboardViewTitle.vue'
import DashboardSection from '../components/Dashboard/DashboardSection.vue'
import InlineContainer from '../components/Dashboard/InlineContainer.vue'
import DashboardDefaultBlock from '../components/Dashboard/DashboardDefaultBlock.vue'

import OperationDelete from "../components/Dashboard/Operations/OperationDelete.vue"
import OperationPlain from "../components/Dashboard/Operations/OperationPlain.vue"
import OperationEdit from "../components/Dashboard/Operations/OperationEdit.vue"

const structureComponents = {
    "dashboard-view-title": DashboardViewTitle,
    "dashboard-section": DashboardSection,
    "inline-container": InlineContainer,
    "default-block": DashboardDefaultBlock
}

const operationsComponents = {
    'delete': OperationDelete,
    'operation': OperationPlain,
    'edit': OperationEdit
}

export {structureComponents, operationsComponents}