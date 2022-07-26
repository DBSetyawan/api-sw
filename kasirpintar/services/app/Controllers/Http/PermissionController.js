'use strict'

const Permission = use('Permission');

class PermissionController {

  index() {
    return Permission.all()  
  }

  async store({request}) {
      const data = request.only(['name', 'slug', 'description'])
      const permission = Permission.create(data)
      return permission
  }

  async update({ request, params }) {
    const data = request.only(['name', 'slug', 'description'])

    const permission = await Permission.findOrFail(params.id)

    permission.merge(data)

    await permission.save()

    return permission
  }


  async destroy({ params }) {
    const permission = await Permission.findOrFail(params.id)

    permission.delete()
  }

}

module.exports = PermissionController
