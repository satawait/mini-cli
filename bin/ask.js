// 配置ask 选项
module.exports = {
    removeFile: [
        {
            name: 'action',
            type: 'list',
            message: 'Target already exists',
            choices: [
                {
                    name: 'overwrite',
                    value: 'overwrite'
                },
                {
                    name: 'cancel',
                    value: false
                }
            ]
        }
    ],
    inputInfo: [
        {
            type: 'input',
            name: 'author',
            message: 'author?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'description?'
        }
    ]
};