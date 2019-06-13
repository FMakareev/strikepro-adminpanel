* title
* description
* measurement
* value_type
* is_visible


Виды номенклатуры : title, description, template
таблица types

Характеристики номенклатуры: таблица features, поля: title, measurement, description, value_type (str) ( int, float, bool, string), is_visible (всегда значение 1, делается на бэкенде)

Видам Номенклатуры всегда можно добавить или убрать характеристику, связь через таблицу type_feature по ID

Номенклатуре выставляется вид номенклатуры, срабатывает экшн выбираются характеристики для этого вида

это при добавлении
ТЗ по номенклатуре отдельно напишу
