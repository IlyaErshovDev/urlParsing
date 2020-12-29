# urlParsing
Скрипт для составления информации о странице по URL.
Тестовое задание для компании iTrack.

# Задание
  Имеются следующие URL:
  - https://itrack.ru/portfolio/website/
  - https://itrack.ru/portfolio/vnedrenie-crm/
  - https://itrack.ru/portfolio/website/filter/project_type-is-korporativnyy_sayt/apply/
  - https://itrack.ru/portfolio/vnedrenie-crm/filter/crm_project_type-is-amocrm/apply/
  - https://itrack.ru/portfolio/website/?PAGEN_1=2
  - https://itrack.ru/portfolio/vnedrenie-crm/?PAGEN_1=2
  - https://itrack.ru/portfolio/vnedrenie-crm/mobifitness/
  - https://itrack.ru/portfolio/website/miratorg/
  
  		Необходимо при загрузке страницы заполнить массив с параметрами страницы:
   - Тип страницы (type) - index, filter, project, nextPage;
   - Направление работы (direct) - website, crm;
   - Параметры фильтра (filterParam) - строка между filter и apply;
   - Проект (project) - код проекта из url;

	И при изменении URL без перезагрузки страницы массив должен быть обновлён.


