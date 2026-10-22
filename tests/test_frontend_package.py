import importlib.util
from pathlib import Path
import tempfile
import unittest

spec = importlib.util.spec_from_file_location('frontend_package', Path(__file__).parents[1] / 'scripts/package-frontend.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)


class FrontendPackageTests(unittest.TestCase):
    def test_package_excludes_production_data_and_operational_files(self):
        with tempfile.TemporaryDirectory() as tmp:
            output = Path(tmp) / 'release'
            manifest = module.package(Path(__file__).parents[1], output)
            for name in ['index.html', 'assets/ui/catalogue.js', 'scripts/language-preference.js', 'assets/ui/licenses/vue-MIT.txt']:
                self.assertIn(name, manifest)
            for name in module.SHARED + ('src', '.git', '.env', 'package.json', 'scripts/package-frontend.py'):
                self.assertFalse((output / name).exists(), name)

    def test_existing_release_is_never_overwritten(self):
        with tempfile.TemporaryDirectory() as tmp:
            with self.assertRaises(ValueError):
                module.package(Path(__file__).parents[1], tmp)


if __name__ == '__main__':
    unittest.main()
