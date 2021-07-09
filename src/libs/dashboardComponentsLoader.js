import DashboardViewTitle from '@/components/Dashboard/DashboardViewTitle.vue'
import DashboardSection from '@/components/Dashboard/DashboardSection.vue'
import InlineContainer from '@/components/Dashboard/InlineContainer.vue'
import DashboardDefaultBlock from '@/components/Dashboard/DashboardDefaultBlock.vue'
import DashboardTable from '@/components/Dashboard/Table/DashboardTable.vue'
import DashboardInstructionItem from '@/components/Dashboard/DashboardInstructionItem.vue'

import ReloadEmiter from '@/components/Dashboard/ReloadEmiter.vue'
import CreateEmiter from '@/components/Dashboard/CreateEmiter.vue'

import OperationDelete from "@/components/Dashboard/Operations/OperationDelete.vue"
import OperationPlain from "@/components/Dashboard/Operations/OperationPlain.vue"
import OperationEdit from "@/components/Dashboard/Operations/OperationEdit.vue"

const structureComponents = {
    "dashboard-view-title": DashboardViewTitle,
    "dashboard-section": DashboardSection,
    "inline-container": InlineContainer,
    "default-block": DashboardDefaultBlock,
    "dashboard-table": DashboardTable,
    "instruction-item": DashboardInstructionItem,
}

const operationsComponents = {
    'delete': OperationDelete,
    'operation': OperationPlain,
    'edit': OperationEdit
}

const listInterationComponents = {
    'reloader': ReloadEmiter,
    'creater': CreateEmiter
}

export {structureComponents, operationsComponents, listInterationComponents}