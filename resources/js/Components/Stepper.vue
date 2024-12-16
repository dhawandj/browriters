<script setup>
 
const props =  defineProps(['order'])

function getStatus(order_status) {
    const allStatuses = ["ordered", "write", "writing", "delivery"];
    const status = {};

    allStatuses.forEach(s => {
        status[s] = allStatuses.indexOf(s) <= allStatuses.indexOf(order_status);
    });

    return status;
}

const status = getStatus(props.order.order_status);
// Output: { ordered: true, pickup: true, writing: false, delivery: false }
// status = pickup 
</script>
<template>
    <div class="space-y-3">
        <p class="font-semibold text-textPrimary">Status</p>
        <div class="flex items-baseline justify-center gap-1">
            <div class="borde flex flex-col items-center justify-center gap-1">
                <div class="flex h-5 w-5 items-center justify-center rounded-full bg-secondaryAlt text-xs text-yellow-500">1</div>
                <span class="text-xs text-yellow-500">ordered</span>
            </div>
            <div class="h-0.5 w-6 bg-secondary"></div>     
            <div class="borde flex flex-col items-center justify-center gap-1">
                <div :class="{'text-yellow-500':status.write}"   class="flex h-5 w-5 items-center justify-center rounded-full bg-secondaryAlt text-xs text-white" >2</div>
                <span :class="{'text-yellow-500':status.write}"  class="text-xs text-textPrimary">picked</span>
            </div>
            <div class="h-0.5 w-6 bg-secondary"></div>
            <div class="borde flex flex-col items-center justify-center gap-1">
                <div :class="{'text-yellow-500':status.writing}"  class="flex h-5 w-5 items-center justify-center rounded-full bg-secondaryAlt text-xs text-white">3</div>
                <span :class="{'text-yellow-500':status.writing}"  class="text-xs text-textPrimary">writting</span>
            </div>
            <div class="h-0.5 w-6 bg-secondary"></div>
            <div class="borde flex flex-col items-center justify-center gap-1">
                <div :class="{'text-yellow-500':status.delivery}"  class="flex h-5 w-5 items-center justify-center rounded-full bg-secondaryAlt text-xs text-white" >4</div>
                <span :class="{'text-yellow-500':status.delivery}" class="text-xs text-textPrimary">delivery</span>
            </div>
        </div>
    </div>
</template>
