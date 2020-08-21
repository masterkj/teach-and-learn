<template>
  <b-breadcrumb sticky :items="items"></b-breadcrumb>
</template>

<script>
export default {
    data() {
      return {
        items: [
          {
            text: 'Admin',
            href: '#'
          },
          {
            text: 'Manage',
            href: '#'
          },
          {
            text: 'Library',
            active: true
          }
        ]
      }
    }
  }
</script>

<style></style>
